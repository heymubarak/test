`<template>
  <div style>
    <a style href class="btn btn-danger" @click.prevent="showSignUp">SignUp</a>
    <modal name="modalSignup" height="auto" :clickToClose="false" :scrollable="true">
      <div class style="padding:20px">
        <div>
          <span style="font-size:25px">Register Here</span>
          <span style="font-size:10px; float:right" @click="close">Close</span>
        </div>
        <!-- <div>{{firstName}}, {{lastName}}, {{phoneNumber}}, {{address}}, {{gender}}, {{interested}}, {{selectedcities}}</div> -->
        <form @submit.prevent="submitData">
          <div class="form-group">
            <label for="fName">First Name</label>
            <span class="requiredInput">*</span>
            <input
              name="First Name"
              type="text"
              class="form-control"
              id="fName"
              v-model="firstName"
              v-validate="'required|min:3'"
              placeholder="e.g. Mubarak"
              :class="{'is-invalid': errors.has('First Name')}"
            />
            <span class="not_valid" v-show="errors.has('First Name')">{{ errors.first('First Name') }}</span>
            <!-- <span class="invalid-feedback">{{firstNameError}}</span> -->
            
          </div>
          <div class="form-group">
            <label for="lName">Last Name</label>
            <span class="requiredInput">*</span>
            <input
              name="Last Name"
              type="text"
              class="form-control"
              id="lName"
              v-model="lastName"
              v-validate="'required|min:3'"
              placeholder="e.g. Shekh"
              :class="{'is-invalid': errors.has('Last Name')}"
            />
            <span class="not_valid" v-show="errors.has('Last Name')">{{ errors.first('Last Name') }}</span>
            <!-- <span class="invalid-feedback">{{lastNameError}}</span> -->
          </div>

          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <span class="requiredInput">*</span>
            <input
              name="Phone Number"
              type="number"
              class="form-control"
              id="phoneNumber"
              v-validate="'required|min:9'"
              v-model="phoneNumber"
              placeholder="e.g. 9979683100"
              :class="{'is-invalid': errors.has('Phone Number')}"
            />
            <span class="not_valid" v-show="errors.has('Phone Number')">{{ errors.first('Phone Number') }}</span>
            <!-- <span class="invalid-feedback">{{phoneNumberError}}</span> -->
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <span class="requiredInput">*</span>
            <input
              name="Email"
              type="text"
              v-validate="'required|email'"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="e.g. mubarak@gmail.com"
              :class="{'is-invalid': errors.has('Email')}"
            />
            <div class="not_valid" v-show="errors.has('Email')">
              <span>{{ errors.first('Email') }}</span>
            </div>

            <!-- <span class="invalid-feedback">{{emailError}}</span> -->
          </div>
          
          <div class="form-group">
            <label for="address">Address</label>
            <span class="requiredInput">*</span>
            <textarea
              name="Address"
              type="text"
              class="form-control"
              id="address"
              v-model="address"
              v-validate="'required|min:10|max:100'"
              placeholder="e.g. 1402/A, Shah Arcade, Malad, Mumbai-97"
              :class="{'is-invalid': addressError}"
            >
            </textarea>
            <span class="not_valid" v-show="errors.has('Address')"> {{ errors.first('Address') }} </span>
            <!-- <span class="invalid-feedback">{{addressError}}</span> -->
          </div>

          <div class="form-group">
            <label for="selection">Cities</label>
            <span class="requiredInput">*</span>
            <select
              class="form-control"
              id="selection"
              @focus="addCities"
              v-model="selectedcities"
              :class="{'is-invalid': selectedcitiesError}"
            >
              <option disabled>Please select your city</option>
              <option v-for="(city, index) in cities" :key="index">{{city}}</option>
            </select>

            <span class="invalid-feedback">{{selectedcitiesError}}</span>
            <!-- <span style="display:none">{{index}}</span> -->
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" value="male" id="male" v-model="gender" />
            <label class="form-check-label" for="male">Male</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="female"
              value="female"
              v-model="gender"
            />
            <label class="form-check-label" for="female">Female</label>
          </div>
          <div class="check-box form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="sports"
              value="sports"
              v-model="interested"
            />
            <label class="form-check-label" for="sports">Sports</label>
          </div>
          <div class="check-box form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="filmtelevision"
              value="filmtelevision"
              v-model="interested"
            />
            <label class="form-check-label" for="filmtelevision">FilmTelevision</label>
          </div>
          <div class="check-box form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="transistor"
              value="Transistor"
              v-model="interested"
            />
            <label class="form-check-label" for="Transistor">Transistor</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success">Register</button>
          </div>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import { alpha } from "../../validators";
import { phoneValidator, alphaNumeric, emailValidator } from "../../validators";
import { mapGetters } from "vuex";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "signUp",

  data() {
    return {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      phoneNumber: "1",
      phoneNumberError: "",
      email: "",
      emailError: "",
      address: "",
      addressError: "",
      selectedcities: "",
      selectedcitiesError: "",
      gender: "female",
      interested: [],
      userFormData: new FormData()
    };
  },
  created() {
    // this.resetData()
  },
  computed: mapGetters(["cities"]),

  methods: {
    ...mapActions(["addCities"]),

    validate() {
      console.log("hello");

      this.firstNameError = alpha(
        this.firstName,
        "First Name is not in correct format"
      );
      this.lastNameError = alpha(
        this.lastName,
        "Last name is not in correct format"
      );
      this.phoneNumberError = phoneValidator(
        this.phoneNumber,
        "Phone Number must contain digits"
      );
      this.emailError = emailValidator(
        this.email,
        "Email is not in correct format"
      );
      this.addressError = alphaNumeric(
        this.address,
        "Address is not in correct format"
      );
      if (this.selectedcities) {
        this.selectedcitiesError = "";
      } else {
        this.selectedcitiesError = "Please select the City";
      }
    },
    formDataObj() {
      this.userFormData.append("firstName", this.firstName);
      this.userFormData.append("lastName", this.lastName);
      this.userFormData.append("phoneNumber", this.phoneNumber);
      this.userFormData.append("email", this.email);
      this.userFormData.append("address", this.address);
      // console.log(this.userFormData.get('ab'));
    },

    resetData() {
      this.firstName = "";
      this.lastName = "";
      this.phoneNumber = "";
      this.address = "";
      this.email = "";
      this.gender = "";
      this.selectedcities = "";
      this.firstNameError = "";
      this.lastNameError = "";
      this.phoneNumberError = "";
      this.addressError = "";
      this.emailError = "";
      // this.genderE = '';
      // this.selectedcities = '';
    },

    async submitData() {
      this.validate();
      this.formDataObj();
      // console.log(Array.from(this.userFormData));
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        this.userFormData
      );
      // for (let value of this.userFormData.entries()) {
      //   console.log(value);
      // }

      this.$modal.show("modalLogin");
      this.$modal.hide("modalSignup");

      // console.log(this.userFormData);
      return res;
    },
    close() {
      this.$modal.hide("modalSignup");
    },
    showSignUp() {
      this.resetData();
      this.$modal.show("modalSignup");
    }
  }
};
</script>

<style scoped>
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback,
.requiredInput {
  color: red;
  padding-left: 5px;
}
.not_valid {
  color: red;
  font-size: 12px;
  padding: 5px;
}
</style>