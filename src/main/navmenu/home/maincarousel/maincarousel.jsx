import React from "react";

function MainCarousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://uwinmaps.s3.us-east-2.amazonaws.com/MainCarousel/wave1.png?response-content-disposition=inline&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEHwaCXVzLWVhc3QtMSJIMEYCIQCsV0XOo5UKMvRPsm%2Fu4GRqMNlBQaZFhJvEl52EJ0Y3fgIhALQiVwQmAT57DQgIqZgmil%2B8pYp9GHD4%2Fet%2BayU24QbNKtsDCGQQARoMNTAwNjY3MTMxNzY3IgxUEomSjuldTQ1LwAkquAOypuHbWnVOzKVdKO66l%2BJmKlmBHn2l1tayNPMb3CL4SXC7ZPTq%2F3HC32C1xfshRx8IPZ3ZSkfJyA5SiU1EAbuDs89njyZ2pZrjAwdAGvCvBApcAvHe0Bth%2FfmNiDQGHvDQnYBkQjYJjrT3nMiKgcsapvqYLH90nHAcM67edI5zVEi9CiwDcEnCEX8FMZxGGYnvMuc8CfLBbhNtYcsudu%2FBcS9xkCAVOy8VxHIORd2HTehV%2BG0qQl9MJr7fz1MtwLv2Ij8nECiyaKacjNIo1IPH73oxPVjZW3IMIDwhNZTWEaS26c8nlO6AT6Wm3HWAn46xijgG3D9qD9zbI0vNlE04pV34vP1tdlcDI2Ma24Fqd05NkyJu8GxlTelveHFvC8MyKENxAFXmohjdoTEIDYq0JT7qm%2BxI8mkC9TBWvHe0l4nK35a32k3jpDZlbhQgeOfKK79FR%2F862grftNA1qYusOLrCtlcEXPH5qYr4wv1GOlBM2bGCsP8ebwfcyI176%2Fbr82RWkxF1crRrGc7y5LdXKJxZDGTH4iRcQypksBtunIgdvtSYaQUo%2BZO6pFvabyU%2Bg2I2O%2FyRlzCY%2FOjsBTqzAe2eG1AlOR8wgg0%2F5SyM%2BKI12G5l6sjNCN98%2FLXRRpAUXu8SpauOHulaO6PltoPavdc65r50S%2Fo32i65tbWrOsxHqYio4kjtFX%2FdB0f0XIFTQ6I6JrHZlgxF1NaJilMb8lg0TBHeQamxPBxZO%2BtLc0T6ZOM8ZSycS9ZuxF0SsP85rODv06SxFvaF%2BRoV7xwUKKLFTptuAcPBrTSvhp%2F1rVvp%2Bew3NITgJaheqsTnsG7pZliJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20191007T005729Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXJEQWE537JQSGIKY%2F20191007%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=ce443c25e7843351a613268db7dda71d955c5fbc4b357926967a3054c20ee898"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://uwinmaps.s3.us-east-2.amazonaws.com/MainCarousel/wave1.png?response-content-disposition=inline&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEHwaCXVzLWVhc3QtMSJIMEYCIQCsV0XOo5UKMvRPsm%2Fu4GRqMNlBQaZFhJvEl52EJ0Y3fgIhALQiVwQmAT57DQgIqZgmil%2B8pYp9GHD4%2Fet%2BayU24QbNKtsDCGQQARoMNTAwNjY3MTMxNzY3IgxUEomSjuldTQ1LwAkquAOypuHbWnVOzKVdKO66l%2BJmKlmBHn2l1tayNPMb3CL4SXC7ZPTq%2F3HC32C1xfshRx8IPZ3ZSkfJyA5SiU1EAbuDs89njyZ2pZrjAwdAGvCvBApcAvHe0Bth%2FfmNiDQGHvDQnYBkQjYJjrT3nMiKgcsapvqYLH90nHAcM67edI5zVEi9CiwDcEnCEX8FMZxGGYnvMuc8CfLBbhNtYcsudu%2FBcS9xkCAVOy8VxHIORd2HTehV%2BG0qQl9MJr7fz1MtwLv2Ij8nECiyaKacjNIo1IPH73oxPVjZW3IMIDwhNZTWEaS26c8nlO6AT6Wm3HWAn46xijgG3D9qD9zbI0vNlE04pV34vP1tdlcDI2Ma24Fqd05NkyJu8GxlTelveHFvC8MyKENxAFXmohjdoTEIDYq0JT7qm%2BxI8mkC9TBWvHe0l4nK35a32k3jpDZlbhQgeOfKK79FR%2F862grftNA1qYusOLrCtlcEXPH5qYr4wv1GOlBM2bGCsP8ebwfcyI176%2Fbr82RWkxF1crRrGc7y5LdXKJxZDGTH4iRcQypksBtunIgdvtSYaQUo%2BZO6pFvabyU%2Bg2I2O%2FyRlzCY%2FOjsBTqzAe2eG1AlOR8wgg0%2F5SyM%2BKI12G5l6sjNCN98%2FLXRRpAUXu8SpauOHulaO6PltoPavdc65r50S%2Fo32i65tbWrOsxHqYio4kjtFX%2FdB0f0XIFTQ6I6JrHZlgxF1NaJilMb8lg0TBHeQamxPBxZO%2BtLc0T6ZOM8ZSycS9ZuxF0SsP85rODv06SxFvaF%2BRoV7xwUKKLFTptuAcPBrTSvhp%2F1rVvp%2Bew3NITgJaheqsTnsG7pZliJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20191007T005729Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXJEQWE537JQSGIKY%2F20191007%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=ce443c25e7843351a613268db7dda71d955c5fbc4b357926967a3054c20ee898"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://uwinmaps.s3.us-east-2.amazonaws.com/MainCarousel/wave1.png?response-content-disposition=inline&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEHwaCXVzLWVhc3QtMSJIMEYCIQCsV0XOo5UKMvRPsm%2Fu4GRqMNlBQaZFhJvEl52EJ0Y3fgIhALQiVwQmAT57DQgIqZgmil%2B8pYp9GHD4%2Fet%2BayU24QbNKtsDCGQQARoMNTAwNjY3MTMxNzY3IgxUEomSjuldTQ1LwAkquAOypuHbWnVOzKVdKO66l%2BJmKlmBHn2l1tayNPMb3CL4SXC7ZPTq%2F3HC32C1xfshRx8IPZ3ZSkfJyA5SiU1EAbuDs89njyZ2pZrjAwdAGvCvBApcAvHe0Bth%2FfmNiDQGHvDQnYBkQjYJjrT3nMiKgcsapvqYLH90nHAcM67edI5zVEi9CiwDcEnCEX8FMZxGGYnvMuc8CfLBbhNtYcsudu%2FBcS9xkCAVOy8VxHIORd2HTehV%2BG0qQl9MJr7fz1MtwLv2Ij8nECiyaKacjNIo1IPH73oxPVjZW3IMIDwhNZTWEaS26c8nlO6AT6Wm3HWAn46xijgG3D9qD9zbI0vNlE04pV34vP1tdlcDI2Ma24Fqd05NkyJu8GxlTelveHFvC8MyKENxAFXmohjdoTEIDYq0JT7qm%2BxI8mkC9TBWvHe0l4nK35a32k3jpDZlbhQgeOfKK79FR%2F862grftNA1qYusOLrCtlcEXPH5qYr4wv1GOlBM2bGCsP8ebwfcyI176%2Fbr82RWkxF1crRrGc7y5LdXKJxZDGTH4iRcQypksBtunIgdvtSYaQUo%2BZO6pFvabyU%2Bg2I2O%2FyRlzCY%2FOjsBTqzAe2eG1AlOR8wgg0%2F5SyM%2BKI12G5l6sjNCN98%2FLXRRpAUXu8SpauOHulaO6PltoPavdc65r50S%2Fo32i65tbWrOsxHqYio4kjtFX%2FdB0f0XIFTQ6I6JrHZlgxF1NaJilMb8lg0TBHeQamxPBxZO%2BtLc0T6ZOM8ZSycS9ZuxF0SsP85rODv06SxFvaF%2BRoV7xwUKKLFTptuAcPBrTSvhp%2F1rVvp%2Bew3NITgJaheqsTnsG7pZliJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20191007T005729Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXJEQWE537JQSGIKY%2F20191007%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=ce443c25e7843351a613268db7dda71d955c5fbc4b357926967a3054c20ee898"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default MainCarousel;
