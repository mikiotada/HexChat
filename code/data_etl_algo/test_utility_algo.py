import pytest
from utility_algo import FormGroupHelper


@pytest.fixture
def success_data():
    data = [
        "test_group",
        [1, 2, 3, 4, 5, 6],
        {"type": 1, "content": "welcome~"},
        [1, 2, 3],
    ]

    # {
    #     "name": "test_group",
    #     "user_ids": [1, 2, 3, 4, 5, 6],
    #     "test_str": {
    #         "welcome_str": {"type": 1, "content": "welcome~"},
    #         "ending_str": [1, 2, 3],
    #     },
    # }
    return data


def test_class(success_data):
    result = FormGroupHelper(
        name=success_data[0],
        user_ids=success_data[1],
        welcome_str=success_data[2],
        ending_str=success_data[3],
    )

    assert isinstance(result.validate_data_for_API(), bool)
