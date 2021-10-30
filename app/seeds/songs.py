from app.models import db, Song
# from flask_login import


def seed_songs():
    song = Song(
        title='Red Waters',
        song_img='https://medley-bucket.s3.amazonaws.com/annie-spratt-Oi0jOBzGM8A-unsplash.jpg',
        file_url='https://medley-bucket.s3.amazonaws.com/Loop+050+-+Red+Waters+(Bbm+140bpm)+%40baceface+1.mp3',
        musician_id=1
    )
    song2 = Song(
        title='Espionage',
        song_img='https://medley-bucket.s3.amazonaws.com/dave-hoefler-f5Ur4TGnFbE-unsplash.jpg',
        file_url='https://medley-bucket.s3.amazonaws.com/Loop+052+-+Espionage+(Gm+180bpm)+%40baceface+1.mp3',
        musician_id=2
    )
    song3 = Song(
        title='Never Fold',
        song_img='https://medley-bucket.s3.amazonaws.com/blueClouds.jpeg',
        file_url='https://medley-bucket.s3.amazonaws.com/Loop+051+-+Never+Fold+(Ebm+150bpm)+%40baceface+1.mp3',
        musician_id=3
    )
    db.session.add(song)
    db.session.add(song2)
    db.session.add(song3)
    db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
