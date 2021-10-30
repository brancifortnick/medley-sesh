from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Musician, Song, db
from flask_login import current_user, login_required
from app.s3 import (
    upload_file_to_s3, allowed_file, get_unique_filename)


musician_routes = Blueprint('musicians', __name__)


@musician_routes.route('/')
@login_required
def get_musicians():
    musicians = Musician.query.all()
    return {'musicians': [musician.to_dict() for musician in musicians]}

@musician_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_artist_id(id):
    musician = Musician.query.get(id)
    return musician.to_dict()



@musician_routes.route('/<int:id>/songs', methods=['GET'])
@login_required
def get_musicians_songs(id):
    songs = Song.query.filter(Song.musician_id == id).all()
    return {'songs': [song.to_dict() for song in songs]}
