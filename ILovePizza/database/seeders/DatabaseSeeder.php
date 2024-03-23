<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PermissionSeeder::class,
            RoleSeeder::class,
            // Questi dati dovranno essere commentati in ambiente di produzione
            // Commenta da qui
            AssociationSeeder::class,
            UserSeeder::class,
            ThreadSeeder::class,
            // a qui
        ]);

    }
}
