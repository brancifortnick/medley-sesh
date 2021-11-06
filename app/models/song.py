from .db import db
from sqlalchemy import func


class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(40), nullable=False)
    file_url = db.Column(db.String(500))
    song_img = db.Column(db.String(255))
    musician_id = db.Column(db.Integer, db.ForeignKey('musicians.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())

    musicians = db.relationship('Musician', back_populates='songs')
    comments = db.relationship('Comment', back_populates='songs')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'file_url': self.file_url,
            'song_img': self.song_img,
            'musician_id': self.musician_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
