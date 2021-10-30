import datetime
from .db import db
from sqlalchemy import DateTime
class Comment(db.Model):

    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    song_id= db.Column(db.Integer, db.ForeignKey("songs.id"))
    comment = db.Column(db.String(255), nullable=True)
    created_at = DateTime(default=datetime.datetime.utcnow)
    updated_at = DateTime(default=datetime.datetime.utcnow)

    songs = db.relationship('Song', back_populates='comments')
    users = db.relationship('User', back_populates='comments')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'song_id': self.song_id,
            'comment': self.comment,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user': self.users.to_dict(),
            'username': self.users.username,
            'song': self.songs.to_dict()
        }
