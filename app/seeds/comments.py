from app.models import db, Comment


def seed_comments():
    comment = Comment(
        song_id=1,
        user_id=1,
        comment="wow what a comment"
    )
    comment2 = Comment(
        song_id=3,
        user_id=2,
        comment="Did you guys listen to that mix, it was pretty intense!!!"
    )
    comment3 = Comment(
        song_id=1,
        user_id=3,
        comment="Incredible"
    )
    db.session.add(comment)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.commit()


def undo_comments():
    db.session.execute('Truncate comments RESTART IDENTITY CASCADE')
    db.session.commit()
