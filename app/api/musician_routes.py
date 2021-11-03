from flask import Blueprint, jsonify, request
from flask.helpers import flash, url_for
from werkzeug.utils import redirect
from app.forms import MusicianForm
from app.models import Musician, Song, db
from flask_login import current_user, login_required
# from app.s3 import (
#     upload_file_to_s3, allowed_file, get_unique_filename)


musician_routes = Blueprint('musicians', __name__)


@musician_routes.route('/', methods=['GET'])
@login_required
def get_musicians():
    musicians = Musician.query.all()
    return {'musicians': [musician.to_dict() for musician in musicians]}


@musician_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_artist_id(id):
    musician = Musician.query.get(id)
    return musician.to_dict()


@musician_routes.route('/new/<musician_name>', methods=['GET', 'POST', 'DELETE'])
@login_required
def add_musician(musician_name):

    if request.method == 'GET':
        musicians = Musician.query.filter(
            Musician.user_id == current_user.id).one_or_none()
        if musicians:
            return {'musicians': [musician.to_dict() for musician in musicians]}
        else:
            print('<<<<<====We erroring out in backend-GET method===<<<<<')
            return {}
    if request.method == 'POST':
        form = MusicianForm()
        print('<<<<<====We erroring out in backend-FORM-ROUTE===<<<<<')
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            print('We erroring out in backend-POST-VALIDATION method')
            musician = Musician(
                musician_name=request.form['musician_name'],
                profile_img=request.form['profile_img'],
                biography=request.form['biography'],
                user_id=current_user.id,
            )
            db.session.add(musician)
            print('////////////////////////////////////backend-POST-DB>SESSION>add')
            db.session.commit()
            return musician.to_dict()

    elif request.method == 'DELETE':
        deleted_musician = Musician.query.filter(
            Musician.user_id == current_user.id,
            Musician.musician_name == musician_name).one_or_none()
        db.session.delete(deleted_musician)
        db.session.commit()
        return deleted_musician.to_dict()

# flash(f"Musician Added Successfully")

# @musician_routes.route('/<int:id>/songs', methods=['GET'])
# @login_required
# def get_musicians_songs(id):
#     songs = Song.query.filter(Song.musician_id == id).all()
#     return {'songs': [song.to_dict() for song in songs]}
