<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!$request->user()->association_id){
            if($request->user()->hasRole('member')){
                $request->user()->removeRole('member');
                $request->session()->flash('status', __('general.association_has_been_deleted'));
            } 
        }

        return $next($request);
    }
}
