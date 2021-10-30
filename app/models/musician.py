import datetime
from .db import db
from sqlalchemy import DateTime

class Musician(db.Model):

    __tablename__ = 'musicians'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    musician_name = db.Column(db.String(30), nullable=False, unique=True)
    profile_img = db.Column(db.String(255))
    biography = db.Column(db.String(255))
    created_at = DateTime(default=datetime.datetime.utcnow)
    updated_at = DateTime(default=datetime.datetime.utcnow)


    users = db.relationship('User', back_populates='musicians')
    songs = db.relationship('Song', back_populates='musicians')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'musician_name': self.musician_name,
            'profile_img': self.profile_img,
            'biography' : self.biography,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'songs': [song.id for song in self.songs]
        }
