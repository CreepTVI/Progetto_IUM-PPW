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
        Schema::table('comments', function (Blueprint $table) {
            $table->foreign('thread_id')->references('thread_id')->on('threads')->onDelete('cascade');
            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade');
            $table->foreign('member_id')->references('member_id')->on('members')->onDelete('cascade');
            $table->foreign('representative_id')->references('representative_id')->on('representatives')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign(['thread_id']);
            $table->dropForeign(['user_id']);
            $table->dropForeign(['member_id']);
            $table->dropForeign(['representative_id']);
        });
    }
};
