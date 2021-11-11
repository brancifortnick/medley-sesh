from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired
from app.models import Song, db


# def song_exists(form, field):
#     title = field.data
#     song_img = field.data
#     song = Song.query.filter(Song.file_url == file_url).one_or_none()


class SongForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    file_url = StringField('file_url', validators=[DataRequired()])
    song_img = StringField('song_img', default=None)
    musician_id = IntegerField('musician_id')
