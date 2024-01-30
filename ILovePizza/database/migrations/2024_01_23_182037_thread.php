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
        Schema::dropIfExists('threads');
        Schema::create('threads', function (Blueprint $table) {
            $table->id('thread_id');
            $table->string('text');
            $table->string('pizza_type');
            $table->unsignedBigInteger('member_id');
            $table->unsignedBigInteger('representative_id');
            $table->binary('photo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('threads');
    }
};
