from flask import Blueprint, request
from flask_login import login_required
from app.models import Comment, db
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
@login_required
def get_all_comments():
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}


@comment_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_comment(id):
    comment = Comment.query.get(id)
    return comment.to_dict()
