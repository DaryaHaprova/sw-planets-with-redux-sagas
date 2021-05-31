import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import * as reactRedux from 'react-redux'
import { when } from 'jest-when'
import {
    getErrorSelector,
    getPendingSelector,
    getPlanetsSelector,
} from '../store/planets/selectors'

describe('App', () => {
    const initialState = {
        pending: false,
        planets: [],
        error: null,
    } as any

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const planets = {
        pending: true,
        planets: [],
        error: null,
    } as any

    when(useSelectorMock)
        .calledWith(getPendingSelector as any)
        .mockReturnValue(planets.pending)
    when(useSelectorMock)
        .calledWith(getPlanetsSelector as any)
        .mockReturnValue(planets.planets)
    when(useSelectorMock)
        .calledWith(getErrorSelector as any)
        .mockReturnValue(planets.error)

    const mockStore = configureStore()
    const store = mockStore(initialState)

    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    it('renders header, footer, main-container', () => {
        expect(screen.getByTestId('header')).toBeDefined()
        expect(screen.getByTestId('footer')).toBeDefined()
        expect(screen.getByTestId('main-container')).toBeDefined()
    })
})
