<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CompaniesSeeder::class);
        $this->call(LocalCommiteesSeeder::class);
        $this->call(TypesSeeder::class);
        $this->call(ProjectsSeeder::class);

    }
}
