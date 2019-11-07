<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('local_commitee_id');
            $table->bigInteger('type_id');
            $table->string('name');
            $table->text('short_description');
            $table->text('details');
            $table->int('price');
            $table->string('address_street')->nullable();
            $table->string('address_zip_code')->nullable();
            $table->string('address_city')->nullable();
            $table->string('address_country')->nullable();
            $table->date('event_date')->nullable();
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
        Schema::dropIfExists('projects');
    }
}
