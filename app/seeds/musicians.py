from app.models import db, Musician

def seed_musicians():
    musician = Musician(
        user_id = 1,
        musician_name='Baceface',
        profile_img='https://medley-bucket.s3.amazonaws.com/baceface+print-01.jpg',
        biography='Music is my life, and I spent my time focusing on music production and music theory to gain practical knowledge in order to follow my true passion - MUSIC!',
    )
    musician2 = Musician(
        user_id=2,
        musician_name='BaceFace',
        profile_img='https://medley-bucket.s3.amazonaws.com/baceface+print-01.jpg',
        biography ='I currently work in "the Big Apple" as a music producer'
    )
    musician3 = Musician(
        user_id = 3,
        musician_name='baceFace',
        profile_img='https://medley-bucket.s3.amazonaws.com/baceface+print-01.jpg',
        biography = "I too, also produce music, and work alongside big name artists'",
    )
    db.session.add(musician)
    db.session.add(musician2)
    db.session.add(musician3)
    db.session.commit()

def undo_musicians():
    db.session.execute('TRUNCATE musicians RESTART IDENTITY CASCADE;')
    db.session.commit()
