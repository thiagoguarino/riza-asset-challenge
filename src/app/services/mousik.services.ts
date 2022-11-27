import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
// import { Artist } from '../interfaces/Artist';

@Injectable({ providedIn: 'root'})
export class ArtistsInfoService {
  constructor(private afs: AngularFirestore) { }

  getAllArtistsInfo(): Promise<any> {
    const getFireStoreData = new Promise<any>((resolve) => {
      this.afs.collection('artistsInfo').valueChanges().subscribe(artists => resolve(artists));
    });
    return getFireStoreData;
  }

  async getOneArtistInfo(slug: string): Promise<any> {
    const db = getFirestore();
    const artistRef = doc(db, 'artistsInfo', slug);
    const getFireStoreData = await getDoc(artistRef);
    const artistData = getFireStoreData.data();
    return artistData;
  }
}
