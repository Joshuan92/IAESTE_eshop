<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('local_commitee_id');
            $table->string('company_name')->nullable();
            $table->string('alias')->nullable();
            $table->string('parent_account')->nullable();
            $table->string('branch')->nullable();
            $table->string('address_street')->nullable();
            $table->string('address_zip_code')->nullable();
            $table->string('address_city')->nullable();
            $table->string('address_country')->nullable();
            $table->string('ICO')->nullable();
            $table->string('DICO')->nullable();
            $table->string('primary_contact')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('contact_phone')->nullable();
            $table->string('web')->nullable();
            $table->string('ares')->nullable();
            $table->string('account_owner')->nullable();
            $table->boolean('confirmed')->nullable()->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
