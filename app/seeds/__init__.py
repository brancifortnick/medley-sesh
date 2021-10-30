from flask.cli import AppGroup
from .users import seed_users, undo_users
from .musicians import seed_musicians, undo_musicians
from .songs import seed_songs, undo_songs
from .comments import seed_comments, undo_comments
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_musicians()
    seed_songs()
    seed_comments()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_musicians()
    undo_songs()
    undo_comments()
    # Add other undo functions here
