<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('members');
        Schema::create('members', function (Blueprint $table) {
            $table->id('member_id');
            $table->string('password');
            $table->string('email')->unique();
            $table->boolean('moderator');
            $table->unsignedBigInteger('representative_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
