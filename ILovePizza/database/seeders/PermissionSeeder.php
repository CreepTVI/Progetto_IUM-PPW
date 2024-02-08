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
        
        Permission::create(['name' => 'add member', 'guard_name' => 'web']);
        Permission::create(['name' => 'remove member', 'guard_name' => 'web']);

        Permission::create(['name' => 'add comment', 'guard_name' => 'web']);
        Permission::create(['name' => 'delete comment', 'guard_name' => 'web']);

        Permission::create(['name' => 'create thread', 'guard_name' => 'web']);
        Permission::create(['name' => 'delete thread', 'guard_name' => 'web']);
        
        Permission::create(['name' => 'create users', 'guard_name' => 'web']);
        Permission::create(['name' => 'edit users', 'guard_name' => 'web']);
        Permission::create(['name' => 'delete users', 'guard_name' => 'web']);
    }
}
