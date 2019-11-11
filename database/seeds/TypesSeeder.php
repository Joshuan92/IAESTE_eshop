<?php
require_once 'vendor/autoload.php';

use Illuminate\Database\Seeder;
use App\Company;

use Faker\Factory as Faker;
use Carbon\Carbon;

class TypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = ['Veletrh iKariéra', 'Den iKariéra', 'Bus iKariéra', 'Bridge Builder Contest (BBC)', 'Průvodce prváka', 'Diář studenta', 'Partnerství s IAESTE Czech Republic'];


        for ($i = 0; $i < count($types); $i++){

            DB::table('types')->insert([
                'name' => $types[$i],
                'created_at' => Carbon::now()
            ]);

        }
    }
}
