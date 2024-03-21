<?php

namespace Database\Factories;

use App\Models\Association;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use \Conner\Tagging\Model\Tag;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Association>
 */
class AssociationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company,
            'description' => $this->faker->sentence,
            'representative_id' => function() {
                $representative = User::factory()->create();

                $representative->assignRole('representative');

                return $representative->id;
            }
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Association $association) {
            $representative = User::find($association->representative_id);
            $representative->association_id = $association->id;
            $representative->save();
            
            $numberOfTags = rand(0, 10);

            $pizzaTypes = [
                'Margherita', 
                'Quattro Stagioni', 
                'Capricciosa', 
                'Diavola', 
                'Prosciutto e Funghi', 
                'Bufalina', 
                'Marinara', 
                'Calzone', 
                'Vegetariana', 
                'Napoletana',
                'Romana',
                'Milanese', 
                'Siciliana', 
                'Gumette'
            ];

            $selectedPizzaTypes = $this->faker->randomElements($pizzaTypes, $numberOfTags);

            foreach ($selectedPizzaTypes as $pizzaType) {
                $association->tag($pizzaType);
                $suggest = Tag::where('name',$pizzaType)->first();
                $suggest->suggest = true;
                $suggest->save();
            }
        });
    }
}
