<template>
  <div
    class="full-screen d-flex rounded align-items-center justify-content-center"
  >
    <b-form class="signup-form rounded auth-form shadow">
      <b-card>
        <b-row no-gutters>
          <b-col cols="12">
            <h4 class="text-dark m-auto text-center">انشاء حساب</h4>
          </b-col>
          <b-col cols="12" class="my-2">
            <div class="d-flex flex-column">
              <label for="">اسم المستخدم</label>
              <b-input placeholder="ادخل اسم المستخدم"></b-input>
            </div>
          </b-col>
          <b-col cols="12" class="my-2">
            <div class="d-flex flex-column">
              <label for="">كلمة المرور</label>
              <b-input placeholder="ادخل كلمة المرور "></b-input>
            </div>
          </b-col>
          <b-col cols="12 " class="my-2">
            <div class="d-flex flex-column">
              <label for=""> التحقق من كلمة المرور </label>
              <b-input placeholder=" ادخل كلمة المرور مجددا "></b-input>
            </div>
          </b-col>
          <b-col cols="12" class="my-2">
            <b-button variant="main" block>انشاء حساب</b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-form>
    <div class="mt-2">
      <small
        >لديك حساب بالفعل؟<a
          class="text-primary"
          @click="$router.push('/login')"
        >
          تسجيل الدخول
        </a></small
      >
    </div>
    <svg
      class="auth-svg"
      viewBox="0 0 419 419"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="mechanical-gears-svgrepo-com 1" clip-path="url(#clip0)">
        <g id="Group">
          <g id="Group_2">
            <path
              id="Vector"
              d="M188.634 234.066C197.096 228.779 204.76 222.331 211.401 214.939L235.343 228.765L257.143 191.005L233.249 177.209C236.287 167.934 238.074 158.096 238.409 147.898L265.592 143.105L258.018 100.167L230.84 104.96C227.084 95.651 222.045 86.995 215.934 79.216L233.7 58.046L200.3 30.022L182.549 51.174C173.879 46.528 164.49 43.055 154.595 40.971V13.385H110.995V40.971C101.099 43.055 91.71 46.528 83.039 51.174L65.289 30.022L31.889 58.047L49.653 79.217C43.543 86.996 38.504 95.653 34.748 104.961L7.57 100.168L0 143.106L27.179 147.899C27.514 158.098 29.302 167.934 32.34 177.212L8.444 191.007L30.245 228.766L54.188 214.944C60.827 222.333 68.491 228.782 76.954 234.069L67.503 260.032L108.475 274.942L117.913 249.014C122.777 249.702 127.744 250.067 132.795 250.067C137.846 250.067 142.814 249.704 147.678 249.014L157.115 274.944L198.085 260.03L188.634 234.066ZM132.793 200.065C102.091 200.065 77.113 175.088 77.113 144.385C77.113 113.684 102.091 88.705 132.793 88.705C163.495 88.705 188.473 113.684 188.473 144.385C188.473 175.088 163.496 200.065 132.793 200.065Z"
              fill="#FF3737"
            />
            <path
              id="Vector_2"
              d="M376.041 266.807L357.246 272.887C353.662 266.658 349.232 261.018 344.131 256.108L354.635 239.344L328.188 222.774L317.69 239.524C311.086 237.086 304.088 235.551 296.864 235.053L294.139 215.494L263.227 219.803L265.952 239.362C259.143 241.815 252.827 245.209 247.14 249.358L232.468 236.114L211.556 259.282L226.24 272.541C222.678 278.659 219.963 285.293 218.22 292.267L198.476 291.553L197.347 322.741L217.09 323.457C218.336 330.655 220.576 337.448 223.648 343.728L208.07 355.871L227.255 380.486L242.864 368.322C248.302 372.904 254.375 376.718 260.895 379.633L256.757 398.977L287.279 405.497L291.412 386.183C294.928 386.193 298.484 385.954 302.064 385.456C305.646 384.958 309.134 384.206 312.511 383.241L321.767 400.692L349.341 386.069L340.075 368.598C345.555 364.012 350.346 358.68 354.327 352.786L372.665 360.222L384.392 331.298L366.089 323.876C367.323 317.001 367.618 309.849 366.853 302.583L385.652 296.499L376.041 266.807ZM297.129 350.006C275.358 353.037 255.18 337.797 252.149 316.029C249.112 294.26 264.356 274.08 286.126 271.05C307.894 268.014 328.067 283.257 331.106 305.028C334.135 326.795 318.896 346.969 297.129 350.006Z"
              fill="#757575"
            />
            <path
              id="Vector_3"
              d="M418.146 158.647L418.878 134.018L403.292 133.555C402.315 128.127 400.569 122.752 398.007 117.584L410.247 107.914L394.976 88.584L382.738 98.25C378.373 94.623 373.545 91.666 368.42 89.434L371.584 74.143L347.461 69.147L344.291 84.428C338.732 84.436 333.135 85.225 327.65 86.84L320.259 73.113L298.564 84.797L305.955 98.526C301.592 102.212 297.848 106.46 294.779 111.092L280.283 105.322L271.172 128.215L285.68 133.994C284.725 139.502 284.539 145.152 285.166 150.793L270.357 155.691L278.089 179.086L292.898 174.19C295.798 179.176 299.324 183.586 303.324 187.391L295.133 200.659L316.096 213.605L324.305 200.313C329.59 202.209 335.133 203.364 340.758 203.727L343.01 219.18L367.393 215.619L365.147 200.185C367.749 199.228 370.317 198.076 372.831 196.722C375.347 195.37 377.722 193.855 379.954 192.212L391.602 202.583L407.989 184.185L396.333 173.802C399.128 168.902 401.208 163.638 402.536 158.183L418.146 158.647ZM359.436 171.844C344.155 180.071 325.032 174.336 316.809 159.061C308.579 143.784 314.315 124.657 329.596 116.434C344.869 108.205 363.991 113.944 372.221 129.221C380.443 144.499 374.711 163.616 359.436 171.844Z"
              fill="#FF3737"
              fill-opacity="0.5"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="418.879" height="418.879" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style>
.auth-form {
  width: 500px;
}
.auth-svg {
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 12vw;
  height: 12vw;
}
#Vector {
  transform-origin: 133px 144px;
  animation: rotate 10s infinite linear;
}
#Vector_2 {
  animation: rotate 7s infinite linear reverse;
  transform-origin: 292px 311px;
}
#Vector_3 {
  animation: rotate 5s infinite linear reverse;
  transform-origin: 345px 144px;
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>