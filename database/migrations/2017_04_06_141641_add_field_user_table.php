<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function($t){
            $t->string("firstname");
            $t->string("image");
            $t->string("address");
            $t->string("phone", 11);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function($t){
            $t->dropColumn("firstname");
            $t->dropColumn("image");
            $t->dropColumn("address");
            $t->dropColumn("phone");
        });
    }
}
