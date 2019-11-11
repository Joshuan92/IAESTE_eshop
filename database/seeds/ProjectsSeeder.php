<?php
require_once 'vendor/autoload.php';

use Illuminate\Database\Seeder;
use App\Company;

use Faker\Factory as Faker;
use Carbon\Carbon;


class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('cs_CZ');

        $names = ['Veletrh iKariéra' , 'Den iKariéra', 'Bus iKariéra', 'Bridge Builder Contest (BBC)', 'Průvodce prváka', 'Diář studenta', 'Partnerství s IAESTE Czech Republic'];

        $cities = ['Praha ČVUT', 'Praha VŠCHT', 'Brno', 'Zlín', 'Liberec', 'Aš'];

        $howManyCities = count($cities);


        for ($i = 0; $i < count($names); $i++){

            for ($j = 0; $j < $howManyCities; $j++){

                DB::table('projects')->insert([
                    'name' => $names[$i].' '.$cities[$j],
                    'short_description' => $faker->catchPhrase,
                    'place' => $cities[$j],
                    'event_date' => Carbon::createFromDate(2019, 1),
                    'created_at' => Carbon::now()
                ]);

                DB::table('project_type')->insert([
                    'project_id' => $i+1,
                    'type_id' => ($i*$howManyCities)+$j+1
                ]);
            }
        }
    }
}
