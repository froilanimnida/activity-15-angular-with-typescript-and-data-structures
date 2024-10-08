import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from '@app/student-list/student-list.component';
import { EmployeeListComponent } from '@app/employee-list/employee-list.component';
import { FruitListComponent } from '@app/fruit-list/fruit-list.component';
import { CourseListComponent } from '@app/course-list/course-list.component';
import { BookListComponent } from '@app/book-list/book-list.component';
import { CityListComponent } from '@app/city-list/city-list.component';
import { MovieListComponent } from '@app/movie-list/movie-list.component';
import { CarModelListComponent } from '@app/car-model-list/card-mode-list.component';
import { ProductListComponent } from '@app/product-list/product-list.component';
import { SubjectListComponent } from '@app/subject-list/subject-list.component';
import { CountryListComponent } from '@app/country-list/country-list.component';
import { SportsListComponent } from '@app/sports-list/sports-list.component';
import { VegetablesListComponent } from '@app/vegetables-list/vegetables-list.component';
import { AnimalsListComponent } from '@app/animals-list/animals-list.component';
import { ToolListComponent } from '@app/tool-list/tool-list.component';
import { LanguageListComponent } from '@app/language-list/language-list.component';
import { GameListComponent } from '@app/game-list/game-list.component';
import { SoftwareListComponent } from '@app/software-list/software-list.component';
import { PhoneContactListComponent } from '@app/phone-contact-list/phone-contact-list.component';
import { MusicPlayListComponent } from '@app/music-play-list/music-play-list.component';
import { FoodMenuListComponent } from '@app/food-menu-list/food-menu-list.component';
import { GroceryListComponent } from '@app/grocery-list/grocery-list.component';
import { ClassroomListComponent } from '@app/classroom-list/classroom-list.component';
import { InventoryListComponent } from '@app/inventory-list/inventory-list.component';
import { LectureListComponent } from '@app/lecture-list/lecture-list.component';
import { StationeryListComponent } from '@app/stationery-list/stationery-list.component';
import { FlowerListComponent } from '@app/flower-list/flower-list.component';
import { DestinationListComponent } from '@app/destination-list/destination-list.component';
import { LaptopListComponent } from '@app/laptop-list/laptop-list.component';
import { LaptopSpecificationListComponent } from '@app/laptop-specification-list/laptop-specification-list.component';
import { ComputerHardwareListComponent } from '@app/computer-hardware-list/computer-hardware-list.component';
import { MobileAppListComponent } from '@app/mobile-app-list/mobile-app-list.component';
import { VideoListComponent } from '@app/video-list/video-list.component';
import { TvShowListComponent } from '@app/tv-show-list/tv-show-list.component';
import { FurnitureListComponent } from '@app/furniture-list/furniture-list.component';
import { AccessoryListComponent } from '@app/accessory-list/accessory-list.component';
import { BuildingListComponent } from '@app/building-list/building-list.component';
import { PaintingListComponent } from '@app/painting-list/painting-list.component';
import { ArtistListComponent } from '@app/artist-list/artist-list.component';
import { ComposerListComponent } from '@app/composer-list/composer-list.component';
import { PodcastListComponent } from '@app/podcast-list/podcast-list.component';
import { ExerciseListComponent } from '@app/exercise-list/exercise-list.component';
import { MealPlanListComponent } from '@app/meal-plan-list/meal-plan-list.component';
import { BudgetListComponent } from '@app/budget-list/budget-list.component';
import { PresentationListComponent } from '@app/presentation-list/presentation-list.component';
import { TourListComponent } from '@app/tour-list/tour-list.component';
import { EventListComponent } from '@app/event-list/event-list.component';
import { DeveloperToolsListComponent } from '@app/developer-tools-list/developer-tools-list.component';
import { FrameworkListComponent } from '@app/framework-list/framework-list.component';
import { LibraryListComponent } from '@app/library-list/library-list.component';

export const routes: Routes = [
	{
		title: 'Student List',
		component: StudentListComponent,
		path: 'student-list',
	},
	{
		title: 'Employee List',
		component: EmployeeListComponent,
		path: 'employee-list',
	},
	{
		title: 'Fruit List',
		component: FruitListComponent,
		path: 'fruit-list',
	},
	{
		title: 'Course List',
		component: CourseListComponent,
		path: 'course-list',
	},
	{
		title: 'Book List',
		component: BookListComponent,
		path: 'book-list',
	},
	{
		title: 'City List',
		component: CityListComponent,
		path: 'city-list',
	},
	{
		title: 'Movie List',
		component: MovieListComponent,
		path: 'movie-list',
	},
	{
		title: 'Car Model List',
		component: CarModelListComponent,
		path: 'car-model-list',
	},
	{
		title: 'Product List',
		component: ProductListComponent,
		path: 'product-list',
	},
	{
		title: 'Subject List',
		component: SubjectListComponent,
		path: 'subject-list',
	},
	{
		title: 'Country List',
		component: CountryListComponent,
		path: 'country-list',
	},
	{
		title: 'Sports List',
		component: SportsListComponent,
		path: 'sports-list',
	},
	{
		title: 'Vegetables List',
		component: VegetablesListComponent,
		path: 'vegetables-list',
	},
	{
		title: 'Animals List',
		component: AnimalsListComponent,
		path: 'animals-list',
	},
	{
		title: 'Tool List',
		component: ToolListComponent,
		path: 'tool-list',
	},
	{
		title: 'Language List',
		component: LanguageListComponent,
		path: 'lang-list',
	},
	{
		title: 'Game List',
		component: GameListComponent,
		path: 'game-list',
	},
	{
		title: 'Software List',
		component: SoftwareListComponent,
		path: 'software-list',
	},
	{
		title: 'Phone Contact List',
		component: PhoneContactListComponent,
		path: 'phone-contact-list',
	},
	{
		title: 'Music Playlist',
		component: MusicPlayListComponent,
		path: 'music-play-list',
	},
	{
		title: 'Food Menu List',
		component: FoodMenuListComponent,
		path: 'food-menu-list',
	},
	{
		title: 'Grocery List',
		component: GroceryListComponent,
		path: 'grocery-list',
	},
	{
		title: 'Classroom List',
		component: ClassroomListComponent,
		path: 'classroom-list',
	},
	{
		title: 'Inventory List',
		component: InventoryListComponent,
		path: 'inventory-list',
	},
	{
		title: 'Lecture List',
		component: LectureListComponent,
		path: 'lecture-list',
	},
	{
		title: 'Stationery List',
		component: StationeryListComponent,
		path: 'stationery-list',
	},
	{
		title: 'Flower List',
		component: FlowerListComponent,
		path: 'flower-list',
	},
	{
		title: 'Destination List',
		component: DestinationListComponent,
		path: 'destination-list',
	},
	{
		title: 'Laptop List',
		component: LaptopListComponent,
		path: 'laptop-list',
	},
	{
		title: 'Laptop Specification List',
		component: LaptopSpecificationListComponent,
		path: 'laptop-specs-list',
	},
	{
		title: 'Computer Hardware List',
		component: ComputerHardwareListComponent,
		path: 'computer-hardware-list',
	},
	{
		title: 'Mobile App List',
		component: MobileAppListComponent,
		path: 'mobile-app-list',
	},
	{
		title: 'Video List',
		component: VideoListComponent,
		path: 'video-list',
	},
	{
		title: 'TV Show List',
		component: TvShowListComponent,
		path: 'tv-show-list',
	},
	{
		title: 'Furniture List',
		component: FurnitureListComponent,
		path: 'furniture-list',
	},
	{
		title: 'Accessory List',
		component: AccessoryListComponent,
		path: 'accessory-list',
	},
	{
		title: 'Building List',
		component: BuildingListComponent,
		path: 'building-list',
	},
	{
		title: 'Paintings List',
		component: PaintingListComponent,
		path: 'painting-list',
	},
	{
		title: 'Artist List',
		component: ArtistListComponent,
		path: 'artist-list',
	},
	{
		title: 'Composer List',
		component: ComposerListComponent,
		path: 'composer-list',
	},
	{
		title: 'Podcast List',
		component: PodcastListComponent,
		path: 'podcast-list',
	},
	{
		title: 'Exercise List',
		component: ExerciseListComponent,
		path: 'exercise-list',
	},
	{
		title: 'Meal Plan List',
		component: MealPlanListComponent,
		path: 'meal-plan-list',
	},
	{
		title: 'Budget List',
		component: BudgetListComponent,
		path: 'budget-list',
	},
	{
		title: 'Presentation List',
		component: PresentationListComponent,
		path: 'presentation-list',
	},
	{
		title: 'Tour List',
		component: TourListComponent,
		path: 'tour-list',
	},
	{
		title: 'Event List',
		component: EventListComponent,
		path: 'event-list',
	},
	{
		title: 'Developer Tools List',
		component: DeveloperToolsListComponent,
		path: 'developer-tool-list',
	},
	{
		title: 'Framework List',
		component: FrameworkListComponent,
		path: 'framework-list',
	},
	{
		title: 'Library List',
		component: LibraryListComponent,
		path: 'library-list',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
