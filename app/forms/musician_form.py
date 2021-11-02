from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
# from app.models import Musician


class MusicianForm(FlaskForm):
    musician_name = StringField('musician_name',validators=[DataRequired()])
    profile_img = StringField('profile_img', validators=[DataRequired()],default=None)
    biography = StringField('biography', validators=[DataRequired()])
