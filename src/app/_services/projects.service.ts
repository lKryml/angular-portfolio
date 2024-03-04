import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Samurai Scrim',
      pictures: [
        'https://private-user-images.githubusercontent.com/103531991/287630759-8cb9b276-ea82-4c90-afbf-eee9c34ee9b0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzUyMjAsIm5iZiI6MTcwOTU3NDkyMCwicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjMwNzU5LThjYjliMjc2LWVhODItNGM5MC1hZmJmLWVlZTljMzRlZTliMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxNzU1MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZTM3ZmViN2RjMzNkYjEyYWVlMGVkZDcwYjUzYzVjY2EyZDZkYjgwNGE3ODI4OTlmNzZhMjE1M2UyZTFlZTczJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.1EEG6KDBCguWc8fQIJvV0jY1TeCBVns6wCzsupGF7VI',
        'https://private-user-images.githubusercontent.com/103531991/287630726-5e5d7c28-e659-498c-ac5e-b3b430a9bdad.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzUyMjAsIm5iZiI6MTcwOTU3NDkyMCwicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjMwNzI2LTVlNWQ3YzI4LWU2NTktNDk4Yy1hYzVlLWIzYjQzMGE5YmRhZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxNzU1MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mOTZlYzcyMjdiNTEyNzI2OWU2Mjg2YzRlOGY2OTQ5ZGNlMmIzMTg0ZjQzZDE1NjllYjdjMzQxMjI0MTMxYTdmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.KxfgNwNxpGo-CtIesi5Ts4eYJdZViWdUOv1rxpF3Vmw',
        'https://private-user-images.githubusercontent.com/103531991/287630684-031d4ad4-7195-43d3-885c-f5bc7e6f3374.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzUyMjAsIm5iZiI6MTcwOTU3NDkyMCwicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjMwNjg0LTAzMWQ0YWQ0LTcxOTUtNDNkMy04ODVjLWY1YmM3ZTZmMzM3NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxNzU1MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYTk4OTJjNzY1Y2M2OWYxMDQ5MzgyNGU5NTU0NjJlODBhNzk1NzdiMjcxOTE3ZWRiYmM5ZDAzMjIwOTBjMjk0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.8MFCBDrH0-eMVM3eNVfdqyNMa7ewcHLfjGZEzgSHmCg',

        'https://private-user-images.githubusercontent.com/103531991/287630592-2e94762d-d13d-4459-ae43-41e40338a133.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzUyMjAsIm5iZiI6MTcwOTU3NDkyMCwicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjMwNTkyLTJlOTQ3NjJkLWQxM2QtNDQ1OS1hZTQzLTQxZTQwMzM4YTEzMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxNzU1MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNDQyNjY4Y2UwMjNkYTFjOTAxM2ZlMTBjNTY5NzdhMjU5OWZiNTU5YmUzOTM2NTY1MDhiNDFmNjM1NDNkZDRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Yqz-6yIH0fas8gxDtBbTgsiLCbbWx7AJGkug1QxdW3g',
      ],
      projectLink: 'https://github.com/lKryml/Samurai-Scrim',
      summary: 'a 2D web fighter game made in html canvas and javascript ',
      description: `Local 2D Fighter game

my first html canvas project, made in 1 week

there is some slight hitbox issues and there is a bug on macOS which makes the game play in slowmotion

Note: player ones attack animation is 2x slower than player 2 because of the animation frames, so as a balancing measure player1 can control his gravity down and player2 cant.`,
      tags: [Tag.JS, Tag.HTMLCanvas, Tag.HTML, Tag.CSS],
    },
    {
      id: 1,
      name: 'Kawaii Cart',
      pictures: [
        'https://private-user-images.githubusercontent.com/103531991/287637307-ac9356d9-11f6-46ed-b775-e280df1c771f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzU3MjMsIm5iZiI6MTcwOTU3NTQyMywicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjM3MzA3LWFjOTM1NmQ5LTExZjYtNDZlZC1iNzc1LWUyODBkZjFjNzcxZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODAzNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZTcyMDkyNmI3ODVhMTFmZGI0MDhhN2NmN2FkZmQ3NGM4NDU4YzVmZDAxZDVlYmQ2ZGJmMjgzMzY3N2MxMjNkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9CsOgtwJehk3ZAz5I86KlsN7jdoCxaA0LdNPEDqbpT8',
        'https://private-user-images.githubusercontent.com/103531991/287637298-7aed99a9-93ad-45e5-b7c4-fd42ef4363af.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzU3MjMsIm5iZiI6MTcwOTU3NTQyMywicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjM3Mjk4LTdhZWQ5OWE5LTkzYWQtNDVlNS1iN2M0LWZkNDJlZjQzNjNhZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODAzNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNzk5NzU1OWE4NTA1YWIwNWUyOGU4ZWE1MzM4MGQwZTVhM2NlOGM2YmI2ZDEzODk5OWNiNDMzYWUwMDRlNjc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Ohru84qpZ4PLwfHXyza0Q0kf1xFhSuwxwVV30EUIxyI',
        'https://private-user-images.githubusercontent.com/103531991/287638680-67bb62ec-915b-4b23-9c5e-7f5440f722d6.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzU3MjMsIm5iZiI6MTcwOTU3NTQyMywicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjM4NjgwLTY3YmI2MmVjLTkxNWItNGIyMy05YzVlLTdmNTQ0MGY3MjJkNi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODAzNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYjgxODQzZTEwZWI0Yzg1YjI4ZTE1MjU0YTg5MmNmOTFkMTg3MTQ2YjhhNzA0ZWRiN2U0ZDZkNjQ4N2I0NmEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.V4sZdZl-4lRX3TxsCUh4sK6nBgMOfKM--6G-X8-6HME',
        'https://private-user-images.githubusercontent.com/103531991/287638701-cbd3a8ba-4378-4f92-b1c1-177a37873614.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzU3MjMsIm5iZiI6MTcwOTU3NTQyMywicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjM4NzAxLWNiZDNhOGJhLTQzNzgtNGY5Mi1iMWMxLTE3N2EzNzg3MzYxNC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODAzNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MTI3ZDU1YjQwOWY2OGVjNDA2Zjc3MTVjMmU4ODc0M2I5YmIwZWUyMGNhYTM4NDYxMGExNTM2ZWE3NmQ3ZDIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uEKtoQFFeyGkEm4D6ThtEdBDHIplOkC4vuLrDSKtwgE',
        'https://private-user-images.githubusercontent.com/103531991/287638707-f3d56cee-4873-45e0-8533-85fcac4ee67d.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzU3MjMsIm5iZiI6MTcwOTU3NTQyMywicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjM4NzA3LWYzZDU2Y2VlLTQ4NzMtNDVlMC04NTMzLTg1ZmNhYzRlZTY3ZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODAzNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lOTlmZmRlNzIzNzkxNDFiNTczNWU3OWUyMTFkNmFjYzVkNmRjYmU1ZTNhMjg2NzM4ZTA4MGI5ODJiMDRkMGU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.yUKLzGiJdLTfYBDKcufaaPXh-Yr87N3Srs4DLwPhVPc',
        'https://private-user-images.githubusercontent.com/103531991/287638714-84facd27-72c8-43f5-a2e8-a364243830f6.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzU3MjMsIm5iZiI6MTcwOTU3NTQyMywicGF0aCI6Ii8xMDM1MzE5OTEvMjg3NjM4NzE0LTg0ZmFjZDI3LTcyYzgtNDNmNS1hMmU4LWEzNjQyNDM4MzBmNi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODAzNDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NzBkZGRlZjNlN2JiMzQ2NmFhNzk3MzU4MjIyODE3NjFmNzZhNmNlZTM5NjQxOWU2NDkxNDEwNzFkOTFiNzNiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.LNoLatNDv53M3DZrtktW37lswjAdzOEHtHvaak9YHbM',
      ],
      projectLink: 'https://github.com/lKryml/Kawaii-Cart',
      summary:
        'a cute shopping list (web)app. you can add items by typing them into the text box and you can remove the item by clicking on it',
      description:
        'a cute shopping list (web)app. you can add items by typing them into the text box and you can remove the item by clicking on it, first experience working with firebase',
      tags: [Tag.JS, Tag.HTML, Tag.CSS, Tag.FIREBASE],
    },
    {
      id: 2,
      name: 'Quick Mark',
      pictures: [
        'https://private-user-images.githubusercontent.com/103531991/288707829-a308ac2f-a858-4ff7-802b-7a43440ad084.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzY1MjAsIm5iZiI6MTcwOTU3NjIyMCwicGF0aCI6Ii8xMDM1MzE5OTEvMjg4NzA3ODI5LWEzMDhhYzJmLWE4NTgtNGZmNy04MDJiLTdhNDM0NDBhZDA4NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODE3MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lODU2YTdmNmI5ZTkwYTg4MDEzNjQ5NmQ2ZTA5OTA1ZjNlZDVmYWJmYzM2Y2NhNmY5MThiZTU1MWRmODRjNTZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.hju8hnFWk7M7KxpXiJtECeuVdu1pjAcYvJFPI6vx3Q0',
      ],
      projectLink: 'https://github.com/lKryml/Quick-Mark',
      summary:
        'a chrome extension to quickly save tabs in a list or save the current tab ',
      description:
        'a chrome extension to quickly save tabs in a list or save the current tab ',
      tags: [Tag.JS, Tag.HTML, Tag.CSS],
    },
    {
      id: 3,
      name: "Jimmy's Diner",
      pictures: [
        'https://private-user-images.githubusercontent.com/103531991/293971235-18d515a4-f9bf-4f3e-86cb-6e25e7e5995c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzY2MDMsIm5iZiI6MTcwOTU3NjMwMywicGF0aCI6Ii8xMDM1MzE5OTEvMjkzOTcxMjM1LTE4ZDUxNWE0LWY5YmYtNGYzZS04NmNiLTZlMjVlN2U1OTk1Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODE4MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMDQyZDg3ODc5YzYzN2M0OGRkZDBkNzIzNGEwYzRiNTk2ZWU1MTA2YTQyOTRkMTkxNTZjMTg2NGY4ZTI5MmQwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.GNDoQUkELS2b3IhOWyuzaMbQGerV8553B_voASWq4TI',
        'https://private-user-images.githubusercontent.com/103531991/293971232-ada75135-e18e-4bc3-8c32-3bfb07a9819a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzY2MDMsIm5iZiI6MTcwOTU3NjMwMywicGF0aCI6Ii8xMDM1MzE5OTEvMjkzOTcxMjMyLWFkYTc1MTM1LWUxOGUtNGJjMy04YzMyLTNiZmIwN2E5ODE5YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODE4MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZjYxNTFhMTEzNTIyNGI2MjE2ZmI5NmIzMDdkZTgxYTkyMGNiNmMyODQ0M2Q2YWU1MDc2Y2Q0NzY3ZmMxZThiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.mLTNOhK82-HKNEb7vsbY5EI0oYlk3c1SIdEdMv1nim0',
        'https://private-user-images.githubusercontent.com/103531991/293971225-6d758464-5fd0-4058-9b8c-ea2cdf569d9b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzY2MDMsIm5iZiI6MTcwOTU3NjMwMywicGF0aCI6Ii8xMDM1MzE5OTEvMjkzOTcxMjI1LTZkNzU4NDY0LTVmZDAtNDA1OC05YjhjLWVhMmNkZjU2OWQ5Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODE4MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xM2ZkOGNlZjEzMGIwMmRkNmM3ZmFkMGVkZmE1OWI0MTA1NzA3OTMwYjZmYjgzNDI2ODNiNTI4MDlkMmE1NmFlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.bXUyOEOMMacEssEODQKPybeFGH_dtpZCjKq9FnbBBSU',
        'https://private-user-images.githubusercontent.com/103531991/293971410-20375f08-379d-4ab0-908b-1f03d3ceda7d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1NzY2MDMsIm5iZiI6MTcwOTU3NjMwMywicGF0aCI6Ii8xMDM1MzE5OTEvMjkzOTcxNDEwLTIwMzc1ZjA4LTM3OWQtNGFiMC05MDhiLTFmMDNkM2NlZGE3ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQxODE4MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OTcyYTZkZjAzMDg5OGYzMjVmNGY0YWU5YzM5ODJlZTY4ZGU5M2M2OTUzM2VjMzMyMzFhMjY5NDlhMzNiOTBlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.cGjFxxTcL8HIjyYrgSgzMAzJzOMfQyekxLSl2yvYBiA',
      ],
      projectLink: 'https://github.com/lKryml/jimmys-diner',
      summary: ' Food ordering webpage ',
      description: ' food ordering webpage ',
      tags: [Tag.JS, Tag.HTML, Tag.CSS],
    },
    {
      id: 4,
      name: 'GPT3 Website',
      pictures: [
        'https://github.com/lKryml/react-gpt3-site/assets/103531991/e814a2b6-4ee2-4f73-bcb1-a9a520e1efc3',
        'https://github.com/lKryml/react-gpt3-site/assets/103531991/d2d3466e-66ba-4643-9d9c-3deb49868850',
        'https://github.com/lKryml/react-gpt3-site/assets/103531991/a152cad2-bd5a-4b89-ab91-58161168cf5d',
        'https://github.com/lKryml/react-gpt3-site/assets/103531991/5176f961-e956-46ad-b46e-85f4a413cbbb',
        'https://github.com/lKryml/react-gpt3-site/assets/103531991/8e1bf8c4-8642-4a22-bb9b-e1acc0d1e447',
        'https://github.com/lKryml/react-gpt3-site/assets/103531991/4853c628-fb2c-4886-87df-9cf7d5e3de6c',
      ],
      projectLink: 'https://github.com/lKryml/react-gpt3-site/',
      summary:
        'A React website showcasing information about the power and leverage of the GPT-3 AI Module',
      description:
        'First react project i worked on, it does not have backend functionality',
      tags: [Tag.JS, Tag.REACT, Tag.CSS, Tag.HTML],
    },
    {
      id: 5,
      name: 'Angular Homes',
      pictures: [
        'https://github.com/lKryml/angular-homes-app/assets/103531991/1dd60dfe-e470-4857-a1ab-98d3e97b1c71',
        'https://github.com/lKryml/angular-homes-app/assets/103531991/2afa7db8-bfbd-4c30-9cc0-b2f113f15032',
      ],
      projectLink: 'https://github.com/lKryml/angular-homes-app',
      summary:
        'First Angular 16 Project Following the official Angular Docs tutorial',
      description:
        'First Angular 16 Project Following the official Angular Docs tutorial',
      tags: [Tag.TYPESCRIPT, Tag.JS, Tag.ANGULAR, Tag.HTML, Tag.CSS],
    },
    {
      id: 6,
      name: 'Tweeetor',
      pictures: [
        'https://github.com/lKryml/tweeetor/assets/103531991/050d3169-c4a4-4400-b290-38fc36749725',
        'https://github.com/lKryml/tweeetor/assets/103531991/a358edd5-01aa-4aaf-8e1b-f8b6a5d1383f',
        'https://github.com/lKryml/tweeetor/assets/103531991/61d5af5c-e7a3-414d-b846-79ab974dc310',
      ],
      projectLink: 'https://github.com/lKryml/tweeetor',
      summary: 'Basic twitter clone ',
      description:
        'Very basic javascript Twitter Clone you can like/unlike posts retweet/unretweet and you can make a post.',
      tags: [Tag.JS, Tag.HTML, Tag.CSS],
    },
    {
      id: 7,
      name: 'Password Generator',
      pictures: [
        'https://private-user-images.githubusercontent.com/103531991/289103449-d8c9dcb1-df9b-4562-b712-9d383ba622e7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk1OTAxMDksIm5iZiI6MTcwOTU4OTgwOSwicGF0aCI6Ii8xMDM1MzE5OTEvMjg5MTAzNDQ5LWQ4YzlkY2IxLWRmOWItNDU2Mi1iNzEyLTlkMzgzYmE2MjJlNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNFQyMjAzMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NTI1NzRjOWM3YTMxM2Y4OGI2NDVlYWUyYjk3ZWVlZWVhY2MzNmFkNDY2YmQ2MmZjNTgyNDU0MWMyZWZhNTM2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.ok9gDaE-6U3EYyIRTRzX0NhKBd0sZtoqQnIeqyGzSqE',
        'https://github.com/lKryml/password-generator/assets/103531991/4e351dcd-b3bd-47a4-89f7-15612aab74cd',
      ],
      projectLink: 'https://github.com/lKryml/password-generator',
      summary: 'Secure password generator ',
      description:
        'Generates a secure password using js including dark and light theme',
      tags: [Tag.JS, Tag.HTML, Tag.CSS],
    },
    {
      id: 8,
      name: 'Portfolio Website #1',
      pictures: [
        'https://github.com/lKryml/portfolio-site/assets/103531991/43a9258b-bdb9-42ad-83c8-e8fa8fa6b421',
        'https://github.com/lKryml/portfolio-site/assets/103531991/3975fb86-2b84-435b-8080-bf1135379911',
        'https://github.com/lKryml/portfolio-site/assets/103531991/bb05417b-c2b0-4fbb-9164-fe3cd8f35180',
        'https://github.com/lKryml/portfolio-site/assets/103531991/6ac3abf5-7605-4567-87c7-3a769ee67621',
        'https://github.com/lKryml/portfolio-site/assets/103531991/708f7a6e-0d4a-4983-bea9-ae24b5f3f6c8',
      ],
      projectLink: 'https://github.com/lKryml/portfolio-site',
      summary: 'First portfolio project made in js/html/css',
      description: 'Basic portfolio website using html/css/js',
      tags: [Tag.JS, Tag.HTML, Tag.CSS],
    },
    {
      id: 9,
      name: 'Rest Countries(Unfinished)',
      pictures: ['../../assets/rest.png'],
      projectLink: 'https://github.com/lKryml/rest-countries',
      summary: 'Website that showcases all countries and their details',
      description:
        ' A Website that showcases all countries and their details using angular rxjs and typescript done as a challenge on frontendmentor during asaryasoft training',
      tags: [Tag.TYPESCRIPT, Tag.ANGULAR, Tag.HTML, Tag.SASS, Tag.RxJS],
    },
    {
      id: 10,
      name: 'Scrimba Javascriptmas',
      pictures: ['../../assets/scriptmas.jpg'],
      projectLink: 'https://github.com/lKryml/javascriptmas-challenge',
      summary:
        'a 24 day advent challenge on scrimba.com consisting of javascript and css daily challenges',
      description:
        ' Finished a 24 day advent challenge on scrimba.com consisting of javascript and css daily challenges',
      tags: [Tag.JS, Tag.HTML, Tag.CSS],
    },
    {
      id: 11,
      name: 'Java Chat Client',
      pictures: [
        'https://github.com/lKryml/java-chat-client/assets/103531991/83bfc0bf-e4df-4f77-9f27-a9a1afd3bacf',
        'https://github.com/lKryml/java-chat-client/assets/103531991/9872a5e1-49d0-4e4c-b2b4-d44d33b8dec6',
      ],
      projectLink: 'https://github.com/lKryml/java-chat-client',
      summary: 'A Java chat client i built for my java course at Al-Refak',
      description:
        'A Java chat client i built for my java course at Al-Refak i built this after learning and using: JavaFX,Threads,Sockets,Input and Output Streams, Bit/Byte Streams, Serialization, HTTP Requests, Buffered Readers and Writers Some of these topics were not included in the course but self taught this project was graded full mark by the course lecturer',
      tags: [Tag.JAVA],
    },
  ];
  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    const project = this.projects.find((proj) => proj.id === id);

    if (project === undefined)
      throw new TypeError('no projects with this id' + id);

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach((project) => {
      let foundAll = true;

      filterTags.forEach((filterTag) => {
        if (project.tags.includes(filterTag) === false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
