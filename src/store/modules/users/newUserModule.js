import { authAPI } from "@/API/auth"

export const newUserModule = {
    state() {
        return {
            newUser: {
                firstName: "",
                secondName: "",
                lastName: "",
                image: null,
                email: "",
                role: "",
                regionId: "",
                cityId: "",
                organizationId: "",
                positionId: "",
                password: "",
                passwordConfirm: "",
                sendNotification: false
            },
        }
    },
    mutations: {
        setNewUserFirstName(state, firstName) {
            state.newUser = {
                ...state.newUser,
                firstName
            }
        },
        setNewUserLastName(state, lastName) {
            state.newUser = {
                ...state.newUser,
                lastName
            }
        },
        setNewUserSecondName(state, secondName) {
            state.newUser = {
                ...state.newUser,
                secondName
            }
        },
        setNewUserImage(state, image) {
            state.newUser = {
                ...state.newUser,
                image
            }
        },
        setNewUserEmail(state, email) {
            state.newUser = {
                ...state.newUser,
                email
            }
        },
        setNewUserRole(state, role) {
            state.newUser = {
                ...state.newUser,
                role
            }
        },
        setNewUserRegionId(state, regionId) {
            state.newUser = {
                ...state.newUser,
                regionId
            }
        },
        setNewUserCityId(state, cityId) {
            state.newUser = {
                ...state.newUser,
                cityId
            }
        },
        setNewUserOrganizationId(state, organizationId) {
            state.newUser = {
                ...state.newUser,
                organizationId
            }
        },
        setNewUserPositionId(state, positionId) {
            state.newUser = {
                ...state.newUser,
                positionId
            }
        },
        setNewUserPassword(state, password) {
            state.newUser = {
                ...state.newUser,
                password
            }
        },
        setNewUserPasswordConfirm(state, passwordConfirm) {
            state.newUser = {
                ...state.newUser,
                passwordConfirm
            }
        },
        setNewUserSendNotification(state, sendNotification) {
            state.newUser = {
                ...state.newUser,
                sendNotification
            }
        },
        clear(state) {
            state.newUser = {
                firstName: "",
                secondName: "",
                lastName: "",
                image: null,
                email: "",
                role: "",
                regionId: "",
                cityId: "",
                organizationId: "",
                positionId: "",
                password: "",
                passwordConfirm: "",
                sendNotification: false
            }
        }
    },
    actions: {
      saveUser({ commit, state }) {
          return new Promise((resolve, reject) => {
            authAPI.saveUser(state.newUser).then(() => {
              alert("Пользователь создан")
              commit("clear")
              resolve()
            }).catch(e => {
              console.log('************* error')
              console.log(e)
              alert("Пользователь с таким email уже зарегистрирован")
            })
          })
        }
    },
    namespaced: true
}