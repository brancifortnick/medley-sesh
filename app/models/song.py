import datetime
from .db import db
from sqlalchemy import DateTime


class Song(db.Model):

    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(40), nullable=False)
    song_img = db.Column(db.String(255))
    file_url = db.Column(db.String(500), nullable=False)
    musician_id = db.Column(db.Integer, db.ForeignKey('musicians.id'))
    created_at = DateTime(default=datetime.datetime.utcnow)
    updated_at = DateTime(default=datetime.datetime.utcnow)

    musicians = db.relationship('Musician', back_populates='songs')
    comments = db.relationship('Comment', back_populates='songs')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'song_img': self.song_img,
            'file_url': self.file_url,
            'musician_id': self.musician_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
