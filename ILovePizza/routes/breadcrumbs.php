<?php // routes/breadcrumbs.php

use App\Models\Thread;
use App\Models\User;

// Note: Laravel will automatically resolve `Breadcrumbs::` without
// this import. This is nice for IDE syntax and refactoring.
use Diglactic\Breadcrumbs\Breadcrumbs;

// This import is also not required, and you could replace `BreadcrumbTrail $trail`
//  with `$trail`. This is nice for IDE type checking and completion.
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

// Home
Breadcrumbs::for('home', function (BreadcrumbTrail $trail) {
    $trail->push(__('general.home'), route('home'));
});

// Home > Profile
Breadcrumbs::for('profile', function (BreadcrumbTrail $trail, User $user) {
    $trail->parent('home');
    $trail->push(__('general.profile', ['name' => $user->name]), route('profile.edit'));
});

Breadcrumbs::for('association', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push(__('general.association'), route('association.edit'));
});

Breadcrumbs::for('explore', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push(__('general.explore'), route('explore'));
});

Breadcrumbs::for('thread', function (BreadcrumbTrail $trail, Thread $thread) {
    $trail->parent('explore');
    $trail->push($thread->title, route('thread.show', $thread));
});

Breadcrumbs::for('newThread', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push(__('general.new thread'), route('thread.new'));
});