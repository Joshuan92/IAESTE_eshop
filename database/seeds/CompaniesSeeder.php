<?php
require_once 'vendor/autoload.php';

use Illuminate\Database\Seeder;
use App\Company;

use Faker\Factory as Faker;

class CompaniesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = Faker::create('cs_CZ');
        
        
        for ($i = 0; $i < 100; $i++) {

            DB::table('companies')->insert([
	            'email' => $faker->companyEmail,
                'password' => bcrypt('secret'),
                'company_name' => $faker->company,
                'address_street' => $faker->streetAddress,
                'address_zip_code' => $faker->postcode,
                'address_city' => $faker->city,
                'address_country' => $faker->country,
                'ICO' => $faker->ico,
                'DICO' => $faker->ico,
                'contact_person' => $faker->firstName . ' ' . $faker->lastName,
                'contact_email' => $faker->email,
                'contact_phone' => $faker->phoneNumber
	        ]);
        
        }
    }
}
    

