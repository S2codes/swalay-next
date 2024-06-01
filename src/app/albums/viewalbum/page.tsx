import React from 'react'
import Style from '../../styles/ViewAlbums.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


// import MusicPlayer from '../components/MusicPlayer'

const albums = () => {
    return (
        <div>
            <div className={Style.albumContainer}>

                <div className={Style.albumThumbnailContainer}>
                    <Image src="/images/album2.jpg" alt='album thumbnail'
                        width={450}
                        height={450}
                        className={Style.albumThumbnail}
                    />
                </div>

                <div className={Style.albumDetails}>
                    <div className={Style.albumGenre}>
                        <span>Music</span>
                    </div>
                    <h2 className={Style.albumTitle}>Album details</h2>
                    <p className={`${Style.albumArtist} mb-2`}>Singer Name</p>
                    <p className={Style.albumInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque debitis eveniet dolorem asd. At sed illum officiis eveniet amet temporibus totam quasi commodi ad non alias</p>

                    <div className='flex'>
                        <div className={`mt-4 mb-2 ${Style.albumEditBtn} p-3`}>Edit Album</div>
                        <Link href={'/'} className={`mt-4 ms-5 mb-2 btn ${Style.albumAddTrack} p-3`}>Add track</Link>
                    </div>

                </div>
            </div>


            <div className={` mt-3 ${Style.trackContainer}`}>
                <div className={`p-1 ${Style.tracksContainer}`}>
                    <h5 className={Style.subheading}><i className="bi bi-music-note"></i> Tracks</h5>
                    <ul className={`mt-2 ${Style.trackList}`}>

                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>01.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>song name here</p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                    <span>2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>02.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>Another song </p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                    <span>2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>03.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>song name here</p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                    <span>2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>01.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>song name here</p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                    <span>2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>02.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>Another song </p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                    <span>2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>03.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>song name here</p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                    <span>2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>


                    </ul>
                </div>
                <div className={`p-1 ${Style.trackDetails}`}>
                    <h5 className={Style.subheading}><i className="bi bi-music-note-list"></i> Track Details</h5>
                    <div className={`p-3 mt-2 ${Style.currentTrackDetails} `}>
                        {/* <p className={`mb-3 ${Style.trackInfoTrackName}`}><span className={Style.trackNameLable}>Track Name: </span> Lost in Mountain</p> */}
                        <p className={`mb-4 ${Style.trackInfoTrackName}`}> Lost in Mountain</p>
                        {/* <ul className='mb-3'> */}
                            {/* <li><span>  </span></li> */}
                            {/* <li><span>Producer Name</span></li>
                            <li><span>Comopser Name</span></li> */}
                        {/* </ul> */}

                        <Tabs defaultValue="account" className="w-100">
                            <TabsList>
                                <TabsTrigger value="account">Track Info</TabsTrigger>
                                <TabsTrigger value="password">Publishing Info</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">Make changes to your account here.</TabsContent>
                            <TabsContent value="password">Change your password here.</TabsContent>
                        </Tabs>


                    </div>
                </div>

            </div>

            <div className={Style.MusicPlayerBox}>
                {/* <MusicPlayer /> */}
                <div className={Style.MusicPlayercontainer}>

                    <div className={Style.trackControllerButtonGroup}>
                        <i className="bi bi-rewind-fill ms-2"></i>
                        <div className={`mx-5 ${Style.trackControllerMusicPlayRound}`}>
                            <i className="bi bi-play-fill"></i>
                        </div>
                        <i className="me-2 bi bi-fast-forward-fill"></i>
                    </div>


                    <div className={Style.rangeContainer}>
                        <span className='me-3'>3.10</span>
                        <input type="range" name='progress' min="0" max="100" step="1" className={Style.progress} id="myRange" />
                        <span className='ms-3'>1.10</span>
                    </div>

                    <p className={`m-0 ${Style.playingTrack}`}>Track Name</p>


                </div>
            </div>

        </div>

    )
}

export default albums