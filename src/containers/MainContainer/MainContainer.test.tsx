import React from 'react'
import { Provider, useSelector } from 'react-redux'
import * as reactRedux from 'react-redux'
import { MainContainer } from './MainContainer'
import configureStore from 'redux-mock-store'
import { render, cleanup } from '@testing-library/react'
import GetPlanetsMock from '../../data/GetPlanetsMock'
import { when } from 'jest-when'
import {
    getPendingSelector,
    getPlanetsSelector,
    getErrorSelector,
} from '../../store/planets/selectors'

describe('MainContainer', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const initialState = {
        pending: false,
        planets: [],
        error: null,
    } as any

    afterEach(() => {
        useSelectorMock.mockClear()
        cleanup()
    })

    it('render loading if pending is true', () => {
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

        const { getByTestId } = render(
            <Provider store={store}>
                <MainContainer />
            </Provider>
        )

        expect(getByTestId('loading')).toHaveTextContent('Loading...')
    })

    it('render error if error is string', () => {
        const planets = {
            pending: false,
            planets: [],
            error: 'error',
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

        const { getByTestId } = render(
            <Provider store={store}>
                <MainContainer />
            </Provider>
        )

        expect(getByTestId('error')).toHaveTextContent('Error')
    })

    it('render planets and description', () => {
        const planets = {
            pending: false,
            planets: GetPlanetsMock,
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

        const { getByTestId } = render(
            <Provider store={store}>
                <MainContainer />
            </Provider>
        )

        expect(getByTestId('planets-list')).toHaveTextContent('Tatooine')
        expect(getByTestId('planet-description')).toBeDefined()
    })
})
