exports.isLoggedIn = (req, res, next) => {
    const { id } = req.params;

    if (!req.isAuthenticated()) {
        req.session.returnTo = (req.query._method === 'DELETE' ?
            `/campgrounds/${id}`
            :
            req.originalUrl.endsWith('reviews') ?
                `/campgrounds/${id}`
                :
                req.originalUrl
        );
        req.flash('error', 'You must be signed in.');
        return res.redirect('/auth/login');
    }
    next();
}

exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
        // delete req.session.returnTo;
    }
    next();
}