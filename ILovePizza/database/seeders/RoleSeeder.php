<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Permessi dei rappresentanti
        $permissions = [
            'add member',
            'remove member',
            'edit association',
            'add comment',
            'delete comment',
            'create thread',
            'delete thread',
        ];

        $representativeRole = Role::create(['name' => 'representative', 'guard_name' => 'web']);
        $userRole = Role::create(['name' => 'user', 'guard_name' => 'web']);
        $memberRole = Role::create(['name' => 'member', 'guard_name' => 'web']);
    

        foreach ($permissions as $permission){
            $representativeRole->givePermissionTo($permission);
        }

        $userRole->givePermissionTo('add comment');
        $userRole->givePermissionTo('delete comment');

        $memberRole->givePermissionTo('add comment');
        $memberRole->givePermissionTo('delete comment');
        $memberRole->givePermissionTo('create thread');
        $memberRole->givePermissionTo('delete thread');

    }
}
