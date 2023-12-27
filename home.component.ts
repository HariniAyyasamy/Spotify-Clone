import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
artist: any;
playArtist(_t21: any) {
throw new Error('Method not implemented.');
}
  recentlyPlayed: any[] = [
    { title: 'Without Me', artist: 'Eminem', imageUrl: 'assets/song.jpeg' },
    { title: 'Skyfall', artist: 'Adele', imageUrl: 'assets/Skyfall.jpeg' },
    {title: 'Superman', artist: 'Athulya', imageUrl:'assets/athulya.jpg'},
    {title: 'Blinding light', artist: 'Dharshini',imageUrl: 'assets/dhar.jpg'},
    {title: 'Haunted', artist: 'Athulya',imageUrl:'assets/sing3.jpg' },
    {title: 'Fearless', artist: 'Athulya',imageUrl:'assets/sing1.jpg' },
    {title: 'Lonely', artist: 'Athulya',imageUrl:'assets/sing2.jpg' },
    {title: 'Kalank', artist: 'Arjit',imageUrl:'assets/download.jpeg' },
    {title: 'Nallai Allai', artist: 'AR',imageUrl:'assets/singer.jpeg' },
    { title: 'Fearless', artist: 'Taylor swift', imageUrl: 'assets/tay.jpeg'},
  ]; 
  favoriteArtists: any[] = [
    { name: 'Blank space',album: 'Taylor swift', imageUrl: 'assets/tay.jpeg'},
    { name: 'Ghosted',album: 'Dharshini', imageUrl: 'assets/sing4.jpg'},
    { name: 'Superman', album:'Athulya',imageUrl: 'assets/athulya.jpg'},
    {name: 'Nallai Allai', album : 'AR',imageUrl:'assets/singer.jpeg' },

  ]; 
  ngOnInit() {
    // Log the data to the console
    console.log('Recently Played Data:', this.recentlyPlayed);
    console.log('Favorite Artists Data:', this.favoriteArtists);
  }
}
