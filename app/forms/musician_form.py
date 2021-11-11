from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Musician


def name_exists(form, field):
    musician_name = field.data
    musician = Musician.query.filter(
        Musician.musician_name == musician_name).first() #look up logic for stronger constraints
    if(musician):
        raise ValidationError('Name already exists')


class MusicianForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    musician_name = StringField('musician_name', validators=[
                                DataRequired(), name_exists])
    profile_img = StringField('profile_img')
    biography = StringField('biography')
