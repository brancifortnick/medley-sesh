from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Song, db
from flask_login import current_user, login_required
from app.s3 import (
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
