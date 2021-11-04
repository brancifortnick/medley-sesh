from functools import update_wrapper
from re import L
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


@musician_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_artist_id(id):
    musician = Musician.query.get(id)
    return musician.to_dict()


@musician_routes.route('/new', methods=['POST'])
@login_required
def add_musician():

    if request.method == 'POST':

        form = MusicianForm()

        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():

            musician = Musician(
                musician_name=form.data['musician_name'],
                profile_img=form.data['profile_img'],
                biography=form.data['biography'],
                user_id=current_user.id,
            )
            db.session.add(musician)
            db.session.commit()
            return musician.to_dict()


@musician_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_musician(id):
    if request.method == "DELETE":
        musician = Musician.query.get(id)
        db.session.delete(musician)
        db.session.commit()
        return {'id', id}

@musician_routes.route('/<int:id>/image', methods=['PUT'])
@login_required
def upload_image_test(id):

    if 'profile_img' not in request.files:
            return {"errors": "image required"}, 400

    profile_img = request.files["profile_img"]

    if not allowed_file(profile_img.filename):
        return {"errors": "file type not permitted"}, 400

    profile_img.filename = get_unique_filename(profile_img.filename)

    upload = upload_file_to_s3(profile_img)

    if "url" not in upload:
        print('we are erroring out at url in upload<<<>>>>>><<<<>>>')
        return upload, 400

    url = upload['url']

    musician = Musician.query.get(id)
    musician.profile_img = url
    db.session.add(musician)
    db.session.commit()
    return musician.to_dict()


@musician_routes.route("/<int:id>/biography", methods=["PUT"])
@login_required
def update_bio(id):
    musician = Musician.query.get(id)
    musician.bio = request.form["biography"]
    db.session.add(musician)
    db.session.commit()
    return musician.to_dict()
