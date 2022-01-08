from flask import Blueprint, request
from flask_login import login_required
from app.models import Comment, db, Song
from flask_login import current_user, login_required



comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def get_all():
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/<int:id>')
def get_by_id(id):
    comments = Comment.query.get(id)
    return comments.to_dict()

@comment_routes.route('/<int:song_id>', methods=['GET'])
def get_song_comments(song_id):
    comments = Comment.query.filter(Comment.song_id == song_id).all()
    return {'comments': [comment.to_dict() for comment in comments]}

#post is working
@comment_routes.route('/new', methods=['POST'])
@login_required
def add_comment():
    new_comment = Comment(
        comment = request.form['comment'],
        song_id = request.form['song_id'],
        user_id = current_user.id
    )
    print('****comment Route****')
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()



@comment_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {'id' : id }

@comment_routes.route('/update/<int:id>', methods=['PUT'])
@login_required
def update_comment(id):
    update_comment = Comment.query.get(id)
    update_comment.comment = request.form['comment']
    db.session.add(update_comment)
    db.session.commit()
    return update_comment.to_dict()
