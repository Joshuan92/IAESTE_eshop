<?php
require_once 'vendor/autoload.php';

use Illuminate\Database\Seeder;
use App\Company;

use Faker\Factory as Faker;
use Carbon\Carbon;

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

        $emails = ['@seznam.cz', '@centrum.cz', '@gmail.com', '@email.cz'];

            $czechToEnglish = [
                'ä'=>'a',
                'Ä'=>'A',
                'á'=>'a',
                'Á'=>'A',
                'à'=>'a',
                'À'=>'A',
                'ã'=>'a',
                'Ã'=>'A',
                'â'=>'a',
                'Â'=>'A',
                'č'=>'c',
                'Č'=>'C',
                'ć'=>'c',
                'Ć'=>'C',
                'ď'=>'d',
                'Ď'=>'D',
                'ě'=>'e',
                'Ě'=>'E',
                'é'=>'e',
                'É'=>'E',
                'ë'=>'e',
                'Ë'=>'E',
                'è'=>'e',
                'È'=>'E',
                'ê'=>'e',
                'Ê'=>'E',
                'í'=>'i',
                'Í'=>'I',
                'ï'=>'i',
                'Ï'=>'I',
                'ì'=>'i',
                'Ì'=>'I',
                'î'=>'i',
                'Î'=>'I',
                'ľ'=>'l',
                'Ľ'=>'L',
                'ĺ'=>'l',
                'Ĺ'=>'L',
                'ń'=>'n',
                'Ń'=>'N',
                'ň'=>'n',
                'Ň'=>'N',
                'ñ'=>'n',
                'Ñ'=>'N',
                'ó'=>'o',
                'Ó'=>'O',
                'ö'=>'o',
                'Ö'=>'O',
                'ô'=>'o',
                'Ô'=>'O',
                'ò'=>'o',
                'Ò'=>'O',
                'õ'=>'o',
                'Õ'=>'O',
                'ő'=>'o',
                'Ő'=>'O',
                'ř'=>'r',
                'Ř'=>'R',
                'ŕ'=>'r',
                'Ŕ'=>'R',
                'š'=>'s',
                'Š'=>'S',
                'ś'=>'s',
                'Ś'=>'S',
                'ť'=>'t',
                'Ť'=>'T',
                'ú'=>'u',
                'Ú'=>'U',
                'ů'=>'u',
                'Ů'=>'U',
                'ü'=>'u',
                'Ü'=>'U',
                'ù'=>'u',
                'Ù'=>'U',
                'ũ'=>'u',
                'Ũ'=>'U',
                'û'=>'u',
                'Û'=>'U',
                'ý'=>'y',
                'Ý'=>'Y',
                'ž'=>'z',
                'Ž'=>'Z',
                'ź'=>'z',
                'Ź'=>'Z'
            ];
        
        
        for ($i = 0; $i < 100; $i++) {

            $ico = $faker->ico;
            $firstName = $faker->firstName; 
            $lastName = $faker->lastName;
            $email = strtr($firstName, $czechToEnglish). '.'. strtr($lastName, $czechToEnglish).$emails[floor(rand(0,3.9))];
            $phoneNumber = $faker->phoneNumber;
            

            DB::table('companies')->insert([
                'company_name' => $faker->company,
                'address_street' => $faker->streetAddress,
                'address_zip_code' => $faker->postcode,
                'address_city' => $faker->city,
                'address_country' => 'Czech Republic',
                'ICO' => $ico,
                'DICO' => 'CZ'.$ico,
                'contact_person' => $firstName . ' ' . $lastName,
                'contact_email' => $email,
                'contact_phone' => $phoneNumber,
                'created_at' => Carbon::now()
            ]);

            
            
            DB::table('users')->insert([
                'email' => $email,
                'email_verified_at' => Carbon::now(),
                'password' => bcrypt('secret'),
                'first_name' => $firstName,
                'last_name' => $lastName,
                'phone_number' => $phoneNumber,
                'confirmed' => 1,
                'created_at' => Carbon::now()
            ]);
            
            DB::table('company_user')->insert([
                'company_id' => $i+1,
                'user_id' => $i*4+1
            ]);

            for ($j=0; $j<3; $j++) {
                
                $firstName = $faker->firstName; 
                $lastName = $faker->lastName;
                $email = strtr($firstName, $czechToEnglish). '.'. strtr($lastName, $czechToEnglish).$emails[floor(rand(0,3.9))];
                $phoneNumber = $faker->phoneNumber;

                DB::table('users')->insert([
                    'email' => $email,
                    'email_verified_at' => Carbon::now(),
                    'password' => bcrypt('secret'),
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'phone_number' => $phoneNumber,
                    'confirmed' => 1,
                    'created_at' => Carbon::now()
                ]);
                
                DB::table('company_user')->insert([
                    'company_id' => $i+1,
                    'user_id' => ($i*4)+1+$j+1
                ]);
            }

            
        
        }
    }
}
    

