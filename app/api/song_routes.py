from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Song, db
from app.forms import SongForm
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


song_routes = Blueprint('songs', __name__)


@song_routes.route('/')
@login_required
def all_songs():
    songs = Song.query.all()
    return {'songs': [song.to_dict() for song in songs]}

@song_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_song(id):
    song = Song.query.get(id)
    return song.to_dict()




@song_routes.route('/new-song', methods=['POST'])
@login_required
def add_song():

    # if 'file_url' not in request.files:
    #     print('song route/ new-song*******')
    #     return {'errors': 'missing file link-> bad upload'}, 400

    file_url = request.files['file_url']

    file_url.filename = get_unique_filename(file_url.filename)

    upload = upload_file_to_s3(file_url)

    if 'url' not in upload:
        return upload, 400

    url = upload['url']

    return {'url': url}

@song_routes.route('/new', methods=['POST'])
@login_required
def complete_song():

    form = SongForm() # make song form

    new_song = Song()

    form.populate_obj(new_song)

    db.session.add(new_song)
    db.session.commit()
    return new_song.to_dict()



@song_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_track(id):
    song = Song.query.id(id)
    if not song:
        return jsonify('Track does not exist')
    db.session.delete(song)
    db.session.commit()
    return {'id', id }
