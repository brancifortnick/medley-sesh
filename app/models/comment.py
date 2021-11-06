from .db import db
from sqlalchemy import func


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    comment = db.Column(db.String(255), nullable=True)
    song_id = db.Column(db.Integer, db.ForeignKey("songs.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
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
