<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;

use Symfony\Component\HttpFoundation\Response;

class Representative
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!Auth::guard('representative')->check()){
            return redirect()->route('login')->with('error', 'Esegui prima l\'accesso');
        }

        return $next($request);
    }
}
