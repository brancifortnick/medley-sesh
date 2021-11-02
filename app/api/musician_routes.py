from flask import Blueprint, jsonify, request
from flask.helpers import flash, url_for
from werkzeug.utils import redirect
from app.forms.musician_form import MusicianForm
from app.models import Musician, Song, db
from flask_login import current_user, login_required
from app.s3 import (
    upload_file_to_s3, allowed_file, get_unique_filename)


musician_routes = Blueprint('musicians', __name__)


@musician_routes.route('/', methods=['GET'])
@login_required
def get_musicians():
    musicians = Musician.query.all()
    return {'musicians': [musician.to_dict() for musician in musicians]}


@musician_routes.route('/<int:id>')
@login_required
def get_artist_id(id):
    musician = Musician.query.get(id)
    return musician.to_dict()


@musician_routes.route('/new', methods=['POST'])
@login_required
def add_musician():
    form = MusicianForm()
    if form.validate_on_submit():
        new_musician = Musician(
            user_id=current_user.id,
            musician_name=request.form['musician_name'],
            profile_img=request.form['profile_img'],
            biography=request.form['biography']
        )
        db.session.add(new_musician)
        db.session.commit()
        return new_musician.to_dict()
    flash(f"Musician Added Successfully")
    return {'errors': 'Validation Error from BackEnd Route'}, 401

# @musician_routes.route('/<int:id>/songs', methods=['GET'])
# @login_required
# def get_musicians_songs(id):
#     songs = Song.query.filter(Song.musician_id == id).all()
#     return {'songs': [song.to_dict() for song in songs]}
