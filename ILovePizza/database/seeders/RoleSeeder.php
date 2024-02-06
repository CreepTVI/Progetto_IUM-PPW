<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $representativeRole = Role::create(['name' => 'representative']);
        $userRole = Role::create(['name' => 'user']);
        $memberRole = Role::create(['name' => 'representative']);
    }
}
