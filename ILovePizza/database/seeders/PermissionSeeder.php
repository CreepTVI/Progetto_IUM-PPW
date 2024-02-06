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
        Permission::create(['name' => 'add member']);
        Permission::create(['name' => 'remove member']);

        Permission::create(['name' => 'add comment']);
        Permission::create(['name' => 'delete comment']);

        Permission::create(['name' => 'create thread']);
        Permission::create(['name' => 'delete thread']);
        
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'delete users']);
    }
}
