<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if(!Permission::where('name','add member')->first())
            Permission::create(['name' => 'add member', 'guard_name' => 'web']);
        
        if(!Permission::where('name','remove member')->first())
            Permission::create(['name' => 'remove member', 'guard_name' => 'web']);

        if(!Permission::where('name','edit association')->first())
            Permission::create(['name' => 'edit association', 'guard_name' => 'web']);        

        if(!Permission::where('name','add comment')->first())
            Permission::create(['name' => 'add comment', 'guard_name' => 'web']);
        
        if(!Permission::where('name','delete comment')->first())
            Permission::create(['name' => 'delete comment', 'guard_name' => 'web']);

        if(!Permission::where('name','create thread')->first())
            Permission::create(['name' => 'create thread', 'guard_name' => 'web']);

        if(!Permission::where('name','delete thread')->first())
            Permission::create(['name' => 'delete thread', 'guard_name' => 'web']);

        
        // Permission::create(['name' => 'create users', 'guard_name' => 'web']);
        // Permission::create(['name' => 'edit users', 'guard_name' => 'web']);
        // Permission::create(['name' => 'delete users', 'guard_name' => 'web']);
    }
}
